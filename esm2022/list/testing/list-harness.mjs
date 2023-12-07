/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatListHarnessBase } from './list-harness-base';
import { getListItemPredicate, MatListItemHarnessBase } from './list-item-harness-base';
/** Harness for interacting with a MDC-based list in tests. */
export class MatListHarness extends MatListHarnessBase {
    constructor() {
        super(...arguments);
        this._itemHarness = MatListItemHarness;
    }
    /** The selector for the host element of a `MatList` instance. */
    static { this.hostSelector = '.mat-mdc-list'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a list with specific attributes.
     * @param options Options for filtering which list instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(this, options);
    }
}
/** Harness for interacting with a list item. */
export class MatListItemHarness extends MatListItemHarnessBase {
    /** The selector for the host element of a `MatListItem` instance. */
    static { this.hostSelector = `${MatListHarness.hostSelector} .mat-mdc-list-item`; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a list item with specific attributes.
     * @param options Options for filtering which list item instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return getListItemPredicate(this, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2xpc3QvdGVzdGluZy9saXN0LWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUE4QixnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25GLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXRGLDhEQUE4RDtBQUM5RCxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUluQztJQUpEOztRQW9CVyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO0lBQzdDLENBQUM7SUFoQkMsaUVBQWlFO2FBQzFELGlCQUFZLEdBQUcsZUFBZSxBQUFsQixDQUFtQjtJQUV0Qzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FFVCxVQUE4QixFQUFFO1FBRWhDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7QUFLSCxnREFBZ0Q7QUFDaEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQUM1RCxxRUFBcUU7YUFDOUQsaUJBQVksR0FBRyxHQUFHLGNBQWMsQ0FBQyxZQUFZLHFCQUFxQixDQUFDO0lBRTFFOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUVULFVBQWtDLEVBQUU7UUFFcEMsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvciwgSGFybmVzc1ByZWRpY2F0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRMaXN0SGFybmVzc0Jhc2V9IGZyb20gJy4vbGlzdC1oYXJuZXNzLWJhc2UnO1xuaW1wb3J0IHtMaXN0SGFybmVzc0ZpbHRlcnMsIExpc3RJdGVtSGFybmVzc0ZpbHRlcnN9IGZyb20gJy4vbGlzdC1oYXJuZXNzLWZpbHRlcnMnO1xuaW1wb3J0IHtnZXRMaXN0SXRlbVByZWRpY2F0ZSwgTWF0TGlzdEl0ZW1IYXJuZXNzQmFzZX0gZnJvbSAnLi9saXN0LWl0ZW0taGFybmVzcy1iYXNlJztcblxuLyoqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBNREMtYmFzZWQgbGlzdCBpbiB0ZXN0cy4gKi9cbmV4cG9ydCBjbGFzcyBNYXRMaXN0SGFybmVzcyBleHRlbmRzIE1hdExpc3RIYXJuZXNzQmFzZTxcbiAgdHlwZW9mIE1hdExpc3RJdGVtSGFybmVzcyxcbiAgTWF0TGlzdEl0ZW1IYXJuZXNzLFxuICBMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzXG4+IHtcbiAgLyoqIFRoZSBzZWxlY3RvciBmb3IgdGhlIGhvc3QgZWxlbWVudCBvZiBhIGBNYXRMaXN0YCBpbnN0YW5jZS4gKi9cbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LW1kYy1saXN0JztcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlYXJjaCBmb3IgYSBsaXN0IHdpdGggc3BlY2lmaWMgYXR0cmlidXRlcy5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgZmlsdGVyaW5nIHdoaWNoIGxpc3QgaW5zdGFuY2VzIGFyZSBjb25zaWRlcmVkIGEgbWF0Y2guXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGg8VCBleHRlbmRzIE1hdExpc3RIYXJuZXNzPihcbiAgICB0aGlzOiBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VD4sXG4gICAgb3B0aW9uczogTGlzdEhhcm5lc3NGaWx0ZXJzID0ge30sXG4gICk6IEhhcm5lc3NQcmVkaWNhdGU8VD4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZSh0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIG92ZXJyaWRlIF9pdGVtSGFybmVzcyA9IE1hdExpc3RJdGVtSGFybmVzcztcbn1cblxuLyoqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBsaXN0IGl0ZW0uICovXG5leHBvcnQgY2xhc3MgTWF0TGlzdEl0ZW1IYXJuZXNzIGV4dGVuZHMgTWF0TGlzdEl0ZW1IYXJuZXNzQmFzZSB7XG4gIC8qKiBUaGUgc2VsZWN0b3IgZm9yIHRoZSBob3N0IGVsZW1lbnQgb2YgYSBgTWF0TGlzdEl0ZW1gIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gYCR7TWF0TGlzdEhhcm5lc3MuaG9zdFNlbGVjdG9yfSAubWF0LW1kYy1saXN0LWl0ZW1gO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIGxpc3QgaXRlbSB3aXRoIHNwZWNpZmljIGF0dHJpYnV0ZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBsaXN0IGl0ZW0gaW5zdGFuY2VzIGFyZSBjb25zaWRlcmVkIGEgbWF0Y2guXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGg8VCBleHRlbmRzIE1hdExpc3RJdGVtSGFybmVzcz4oXG4gICAgdGhpczogQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+LFxuICAgIG9wdGlvbnM6IExpc3RJdGVtSGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxUPiB7XG4gICAgcmV0dXJuIGdldExpc3RJdGVtUHJlZGljYXRlKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=