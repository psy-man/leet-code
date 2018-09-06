import { LinkedList, LinkedListNode } from './linked-list';


export function testBed(f: Function) {
  return (...args) => {
    return f.apply(null, cloneParams(args));
  }
}


export function cloneParams(params: any[]): any[] {
  let clonedParams = [];

  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];

    if (Array.isArray(param)) {
      clonedParams.push(param.slice());
    } else if (param !== null && typeof param === 'object') {
      clonedParams.push({...param});
    } else {
      clonedParams.push(param);
    }
  }

  return clonedParams;
}

enum Strategy {
  default, inPlace
}

export enum Type {
  linkedList
}

class Assertion {
  public result: any = null;

  constructor(public args: any[]) {}
}


export class TestHelper {
  assertions: Assertion[] = [];


  constructor(public type: Type = null) {
    this.type = type;
  }

  expect(...args) {
    const assertion = new Assertion(args);

    return {
      toEqual: this._toEqual.bind(this, assertion)
    }
  }

  private _toEqual(assertion: Assertion, result) {
    assertion.result = result;
    this.assertions.push(assertion);
  }

  execute(...functions: Function[]) {
    this._runTests(this._testRegularFunctions.bind(this), functions);
  }

  executeInPlace(...functions: Function[]) {
    this._runTests(this._testInPlaceFunctions.bind(this), functions);
  }

  private _runTests(executor, functions) {
    if (functions.length === 1) {
      executor(functions[0]);
    } else {
      for (const func of functions) {
        executor(func);
      }
    }
  }

  private _testRegularFunctions(f) {
    for (const assertion of this.assertions) {
      it(`${f.name}: (${assertion.args.join(' | ')}) => (${assertion.result})`, () => {
        const func = testBed(f);
        let res = func.apply(null, assertion.args);

        if (this.type === Type.linkedList) {
          res = LinkedList.toArray(res);
        }

        expect(res).toEqual(assertion.result);
      });
    }
  }

  private _testInPlaceFunctions(func) {
    for (const assertion of this.assertions) {
      it(`${func.name} | in-place: (${assertion.args.join(' | ')}) => (${assertion.result})`, () => {
        const args = cloneParams(assertion.args);
        func.apply(null, args);
        expect(args[0]).toEqual(assertion.result);
      });
    }
  }
}
