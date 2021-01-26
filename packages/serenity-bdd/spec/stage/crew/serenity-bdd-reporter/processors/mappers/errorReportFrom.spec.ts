import 'mocha';
import { expect } from '@integration/testing-tools';
import { ConfigurationError } from '@serenity-js/core';
import { errorReportFrom } from '../../../../../../src/stage/crew/serenity-bdd-reporter/processors/mappers';

describe('errorReportFrom', () => {

    describe('when representing Errors as Serenity BDD-standard JSON reports', () => {

        it('supports native Error', () => {

            const report = errorReportFrom(thrown(Error, 'boom'))

            expect(report.errorType).to.equal('Error');
            expect(report.message).to.equal('boom');
            expect(report.stackTrace.length).to.be.greaterThan(0);
        });

        it('supports Serenity/JS Errors', () => {

            const report = errorReportFrom(thrown(ConfigurationError, 'wrong config'))

            expect(report.errorType).to.equal('ConfigurationError');
            expect(report.message).to.equal('wrong config');
            expect(report.stackTrace.length).to.be.greaterThan(0);
        });

        it('supports Serenity/JS Errors with root causes', () => {

            const report = errorReportFrom(thrown(ConfigurationError, 'wrong config', thrown(Error, 'config file does not exist')))

            expect(report.errorType).to.equal('ConfigurationError');
            expect(report.message).to.equal('wrong config');
            expect(report.rootCause.errorType).to.equal('Error');
            expect(report.rootCause.message).to.equal('config file does not exist');
            expect(report.stackTrace.length).to.be.greaterThan(0);
        });
    });

    describe('when representing non-Error "throwables" as Serenity BDD-standard JSON reports', () => {

        it('supports null', () => {
            const report = errorReportFrom(null);

            expect(report).to.deep.equal({
                'errorType': 'null',
                'message': '',
                'stackTrace': [],
            });
        });

        it('supports undefined', () => {
            const report = errorReportFrom(undefined);

            expect(report).to.deep.equal({
                'errorType': 'undefined',
                'message': '',
                'stackTrace': [],
            });
        });

        it('supports objects', () => {
            const report = errorReportFrom({ message: `something's wrong`, code: 500 });

            expect(report).to.deep.equal({
                'errorType': 'Object',
                'message': `{ message: "something's wrong", code: 500 }`,
                'stackTrace': [],
            });
        });

        it('supports arrays', () => {
            const report = errorReportFrom([ 'you', 'really', `shouldn't`, 'throw', 'arrays' ]);

            expect(report).to.deep.equal({
                'errorType': 'Array',
                'message': `[ 'you', 'really', \"shouldn't\", 'throw', 'arrays' ]`,
                'stackTrace': [],
            });
        });

        it('supports numbers', () => {
            const report = errorReportFrom(404);

            expect(report).to.deep.equal({
                'errorType': 'Number',
                'message': '404',
                'stackTrace': [],
            });
        });

        it('supports strings', () => {
            const report = errorReportFrom('skipped step');

            expect(report).to.deep.equal({
                'errorType': 'String',
                'message': 'skipped step',
                'stackTrace': [],
            });
        });

        it('supports booleans', () => {
            const report = errorReportFrom(false);

            expect(report).to.deep.equal({
                'errorType': 'Boolean',
                'message': 'false',
                'stackTrace': [],
            });
        });
    });
});

function thrown<T>(type: new (...args: any[]) => T, ...args: any[]): T {
    try {
        throw new type(...args);
    } catch (e) {
        return e;
    }
}
