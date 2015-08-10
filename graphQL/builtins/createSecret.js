import {List} from 'immutable';
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import ReindexID from '../builtins/ReindexID';
import createCreate from '../mutations/createCreate';
import createUpdate from '../mutations/createUpdate';
import createReplace from '../mutations/createReplace';
import TypeSet from '../TypeSet';

export default function createSecret({Node, Builtin}) {
  return new TypeSet({
    type: new GraphQLObjectType({
      name: 'ReindexSecret',
      fields: {
        id: {
          type: ReindexID,
        },
        value: {
          type: GraphQLString,
        },
      },
      interfaces: [Node, Builtin],
      isTypeOf(obj) {
        return obj.id.type === 'ReindexSecret';
      },
    }),
    blacklistedRootFields: List([
      createCreate,
      createUpdate,
      createReplace,
    ]),
  });
}