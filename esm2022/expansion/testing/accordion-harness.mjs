/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import { MatExpansionPanelHarness } from './expansion-harness';
/** Harness for interacting with a standard mat-accordion in tests. */
export class MatAccordionHarness extends ComponentHarness {
    static { this.hostSelector = '.mat-accordion'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for an accordion
     * with specific attributes.
     * @param options Options for narrowing the search.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatAccordionHarness, options);
    }
    /** Gets all expansion panels which are part of the accordion. */
    async getExpansionPanels(filter = {}) {
        return this.locatorForAll(MatExpansionPanelHarness.with(filter))();
    }
    /** Whether the accordion allows multiple expanded panels simultaneously. */
    async isMulti() {
        return (await this.host()).hasClass('mat-accordion-multi');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZXhwYW5zaW9uL3Rlc3RpbmcvYWNjb3JkaW9uLWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFHN0Qsc0VBQXNFO0FBQ3RFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7YUFDaEQsaUJBQVksR0FBRyxnQkFBZ0IsQ0FBQztJQUV2Qzs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBbUMsRUFBRTtRQUMvQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxLQUFLLENBQUMsa0JBQWtCLENBQ3RCLFNBQXVDLEVBQUU7UUFFekMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSxLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnRIYXJuZXNzLCBIYXJuZXNzUHJlZGljYXRlfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge01hdEV4cGFuc2lvblBhbmVsSGFybmVzc30gZnJvbSAnLi9leHBhbnNpb24taGFybmVzcyc7XG5pbXBvcnQge0FjY29yZGlvbkhhcm5lc3NGaWx0ZXJzLCBFeHBhbnNpb25QYW5lbEhhcm5lc3NGaWx0ZXJzfSBmcm9tICcuL2V4cGFuc2lvbi1oYXJuZXNzLWZpbHRlcnMnO1xuXG4vKiogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIHN0YW5kYXJkIG1hdC1hY2NvcmRpb24gaW4gdGVzdHMuICovXG5leHBvcnQgY2xhc3MgTWF0QWNjb3JkaW9uSGFybmVzcyBleHRlbmRzIENvbXBvbmVudEhhcm5lc3Mge1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtYWNjb3JkaW9uJztcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlYXJjaCBmb3IgYW4gYWNjb3JkaW9uXG4gICAqIHdpdGggc3BlY2lmaWMgYXR0cmlidXRlcy5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgbmFycm93aW5nIHRoZSBzZWFyY2guXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGgob3B0aW9uczogQWNjb3JkaW9uSGFybmVzc0ZpbHRlcnMgPSB7fSk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0QWNjb3JkaW9uSGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRBY2NvcmRpb25IYXJuZXNzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFsbCBleHBhbnNpb24gcGFuZWxzIHdoaWNoIGFyZSBwYXJ0IG9mIHRoZSBhY2NvcmRpb24uICovXG4gIGFzeW5jIGdldEV4cGFuc2lvblBhbmVscyhcbiAgICBmaWx0ZXI6IEV4cGFuc2lvblBhbmVsSGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogUHJvbWlzZTxNYXRFeHBhbnNpb25QYW5lbEhhcm5lc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGb3JBbGwoTWF0RXhwYW5zaW9uUGFuZWxIYXJuZXNzLndpdGgoZmlsdGVyKSkoKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBhY2NvcmRpb24gYWxsb3dzIG11bHRpcGxlIGV4cGFuZGVkIHBhbmVscyBzaW11bHRhbmVvdXNseS4gKi9cbiAgYXN5bmMgaXNNdWx0aSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS5oYXNDbGFzcygnbWF0LWFjY29yZGlvbi1tdWx0aScpO1xuICB9XG59XG4iXX0=