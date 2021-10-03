import { expect } from 'chai';
import { getCompletedTodos } from '../../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Climb Mount',
            isCompleted: false,
        }];
        const completedTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(completedTodos);
    });
});