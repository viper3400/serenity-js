import type { FileSystemLocation } from '../io';
import type { ExpectationDetails } from '../screenplay';

/**
 * @group Errors
 */
export interface ErrorOptions {
    message: string;
    location?: FileSystemLocation;
    expectation?: ExpectationDetails;
    diff?: {
        expected: unknown;
        actual: unknown;
    };
    cause?: Error;
}
