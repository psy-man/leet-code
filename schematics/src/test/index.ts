import {
  apply,
  branchAndMerge,
  chain, mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function test(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(options.type)
    ]);

    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ])(tree, _context);
  };
}
