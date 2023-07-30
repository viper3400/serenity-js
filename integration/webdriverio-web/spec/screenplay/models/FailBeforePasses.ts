import { Ensure } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { By, isVisible, Navigate, PageElement } from '@serenity-js/web';
import { describe, it } from 'mocha'

const NotAvailableElement = () => PageElement.located(By.css('#not-found'));

describe('will pass though it should fail', () => {
    
    before(async () => {       
        return await actorCalled('Louis').attemptsTo(
            Navigate.to('https://the-internet.herokuapp.com/entry_ad'),
            Ensure.that(NotAvailableElement(), isVisible())
        );
    });

    it('should ensure something that will fail', async () =>
        await actorCalled('Louis').attemptsTo(Ensure.that(NotAvailableElement(), isVisible())));
});

