import { includes } from '@serenity-js/assertions';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export class TodoList {
    static newTodoInput = PageElement.located(By.css('.new-todo')).describedAs('"What needs to be done?" input box');

    static editTodoInput = PageElement.located(By.css('.todo-list li.editing .edit')).describedAs('"What needs to be done?" input box');

    static items = PageElements.located(By.css('.todo-list li')).describedAs('List of Items');

    static itemCalled = (name: string) =>
        TodoList.items
            .where(Text, includes(name))
            .first();
}
