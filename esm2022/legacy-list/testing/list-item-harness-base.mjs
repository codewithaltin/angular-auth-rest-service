/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate, ContentContainerComponentHarness, parallel, } from '@angular/cdk/testing';
const iconSelector = '.mat-list-icon';
const avatarSelector = '.mat-list-avatar';
/**
 * Gets a `HarnessPredicate` that applies the given `BaseListItemHarnessFilters` to the given
 * list item harness.
 * @template H The type of list item harness to create a predicate for.
 * @param harnessType A constructor for a list item harness.
 * @param options An instance of `BaseListItemHarnessFilters` to apply.
 * @return A `HarnessPredicate` for the given harness type with the given options applied.
 * @deprecated Use `getListItemPredicate` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export function getListItemPredicate(harnessType, options) {
    return new HarnessPredicate(harnessType, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
}
/**
 * Harness for interacting with a list subheader.
 * @deprecated Use `MatSubheaderHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacySubheaderHarness extends ComponentHarness {
    static { this.hostSelector = '.mat-subheader'; }
    static with(options = {}) {
        return new HarnessPredicate(MatLegacySubheaderHarness, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
    }
    /** Gets the full text content of the list item (including text from any font icons). */
    async getText() {
        return (await this.host()).text();
    }
}
/**
 * Shared behavior among the harnesses for the various `MatListItem` flavors.
 * @docs-private
 * @deprecated Use `class` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyListItemHarnessBase extends ContentContainerComponentHarness {
    constructor() {
        super(...arguments);
        this._lines = this.locatorForAll('.mat-line');
        this._avatar = this.locatorForOptional(avatarSelector);
        this._icon = this.locatorForOptional(iconSelector);
    }
    /** Gets the full text content of the list item. */
    async getText() {
        return (await this.host()).text({ exclude: `${iconSelector}, ${avatarSelector}` });
    }
    /** Gets the lines of text (`mat-line` elements) in this nav list item. */
    async getLinesText() {
        const lines = await this._lines();
        return parallel(() => lines.map(l => l.text()));
    }
    /** Whether this list item has an avatar. */
    async hasAvatar() {
        return !!(await this._avatar());
    }
    /** Whether this list item has an icon. */
    async hasIcon() {
        return !!(await this._icon());
    }
    /** Whether this list option is disabled. */
    async isDisabled() {
        return (await this.host()).hasClass('mat-list-item-disabled');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWhhcm5lc3MtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktbGlzdC90ZXN0aW5nL2xpc3QtaXRlbS1oYXJuZXNzLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLGdCQUFnQixFQUVoQixnQkFBZ0IsRUFDaEIsZ0NBQWdDLEVBQ2hDLFFBQVEsR0FDVCxNQUFNLHNCQUFzQixDQUFDO0FBTTlCLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLE1BQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBRTFDOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsV0FBMkMsRUFDM0MsT0FBeUM7SUFFekMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3pELE1BQU0sRUFDTixPQUFPLENBQUMsSUFBSSxFQUNaLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDM0UsQ0FBQztBQUNKLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjthQUN0RCxpQkFBWSxHQUFHLGdCQUFnQixDQUFDO0lBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsVUFBeUMsRUFBRTtRQUUzQyxPQUFPLElBQUksZ0JBQWdCLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUN2RSxNQUFNLEVBQ04sT0FBTyxDQUFDLElBQUksRUFDWixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDO0lBRUQsd0ZBQXdGO0lBQ3hGLEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7QUFhSDs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsNEJBQTZCLFNBQVEsZ0NBQTBEO0lBQXJIOztRQUNVLFdBQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEQsVUFBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQTJCeEQsQ0FBQztJQXpCQyxtREFBbUQ7SUFDbkQsS0FBSyxDQUFDLE9BQU87UUFDWCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxZQUFZLEtBQUssY0FBYyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsS0FBSyxDQUFDLFlBQVk7UUFDaEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxLQUFLLENBQUMsU0FBUztRQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsS0FBSyxDQUFDLFVBQVU7UUFDZCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50SGFybmVzcyxcbiAgQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yLFxuICBIYXJuZXNzUHJlZGljYXRlLFxuICBDb250ZW50Q29udGFpbmVyQ29tcG9uZW50SGFybmVzcyxcbiAgcGFyYWxsZWwsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7XG4gIExlZ2FjeUJhc2VMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzLFxuICBMZWdhY3lTdWJoZWFkZXJIYXJuZXNzRmlsdGVycyxcbn0gZnJvbSAnLi9saXN0LWhhcm5lc3MtZmlsdGVycyc7XG5cbmNvbnN0IGljb25TZWxlY3RvciA9ICcubWF0LWxpc3QtaWNvbic7XG5jb25zdCBhdmF0YXJTZWxlY3RvciA9ICcubWF0LWxpc3QtYXZhdGFyJztcblxuLyoqXG4gKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgYXBwbGllcyB0aGUgZ2l2ZW4gYEJhc2VMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzYCB0byB0aGUgZ2l2ZW5cbiAqIGxpc3QgaXRlbSBoYXJuZXNzLlxuICogQHRlbXBsYXRlIEggVGhlIHR5cGUgb2YgbGlzdCBpdGVtIGhhcm5lc3MgdG8gY3JlYXRlIGEgcHJlZGljYXRlIGZvci5cbiAqIEBwYXJhbSBoYXJuZXNzVHlwZSBBIGNvbnN0cnVjdG9yIGZvciBhIGxpc3QgaXRlbSBoYXJuZXNzLlxuICogQHBhcmFtIG9wdGlvbnMgQW4gaW5zdGFuY2Ugb2YgYEJhc2VMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzYCB0byBhcHBseS5cbiAqIEByZXR1cm4gQSBgSGFybmVzc1ByZWRpY2F0ZWAgZm9yIHRoZSBnaXZlbiBoYXJuZXNzIHR5cGUgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucyBhcHBsaWVkLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBnZXRMaXN0SXRlbVByZWRpY2F0ZWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdC90ZXN0aW5nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0SXRlbVByZWRpY2F0ZTxIIGV4dGVuZHMgTWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzQmFzZT4oXG4gIGhhcm5lc3NUeXBlOiBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8SD4sXG4gIG9wdGlvbnM6IExlZ2FjeUJhc2VMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzLFxuKTogSGFybmVzc1ByZWRpY2F0ZTxIPiB7XG4gIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShoYXJuZXNzVHlwZSwgb3B0aW9ucykuYWRkT3B0aW9uKFxuICAgICd0ZXh0JyxcbiAgICBvcHRpb25zLnRleHQsXG4gICAgKGhhcm5lc3MsIHRleHQpID0+IEhhcm5lc3NQcmVkaWNhdGUuc3RyaW5nTWF0Y2hlcyhoYXJuZXNzLmdldFRleHQoKSwgdGV4dCksXG4gICk7XG59XG5cbi8qKlxuICogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIGxpc3Qgc3ViaGVhZGVyLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBNYXRTdWJoZWFkZXJIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9saXN0L3Rlc3RpbmdgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdExlZ2FjeVN1YmhlYWRlckhhcm5lc3MgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzIHtcbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LXN1YmhlYWRlcic7XG5cbiAgc3RhdGljIHdpdGgoXG4gICAgb3B0aW9uczogTGVnYWN5U3ViaGVhZGVySGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lTdWJoZWFkZXJIYXJuZXNzPiB7XG4gICAgcmV0dXJuIG5ldyBIYXJuZXNzUHJlZGljYXRlKE1hdExlZ2FjeVN1YmhlYWRlckhhcm5lc3MsIG9wdGlvbnMpLmFkZE9wdGlvbihcbiAgICAgICd0ZXh0JyxcbiAgICAgIG9wdGlvbnMudGV4dCxcbiAgICAgIChoYXJuZXNzLCB0ZXh0KSA9PiBIYXJuZXNzUHJlZGljYXRlLnN0cmluZ01hdGNoZXMoaGFybmVzcy5nZXRUZXh0KCksIHRleHQpLFxuICAgICk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZnVsbCB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxpc3QgaXRlbSAoaW5jbHVkaW5nIHRleHQgZnJvbSBhbnkgZm9udCBpY29ucykuICovXG4gIGFzeW5jIGdldFRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS50ZXh0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWxlY3RvcnMgZm9yIHRoZSB2YXJpb3VzIGxpc3QgaXRlbSBzZWN0aW9ucyB0aGF0IG1heSBjb250YWluIHVzZXIgY29udGVudC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZW51bWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdC90ZXN0aW5nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIE1hdExlZ2FjeUxpc3RJdGVtU2VjdGlvbiB7XG4gIENPTlRFTlQgPSAnLm1hdC1saXN0LWl0ZW0tY29udGVudCcsXG4gIC8vIFRPRE8obW1hbGVyYmEpOiBjb25zaWRlciBhZGRpbmcgc2VjdGlvbnMgZm9yIGxlYWRpbmcvdHJhaWxpbmcgaWNvbnMuXG59XG5cbi8qKlxuICogU2hhcmVkIGJlaGF2aW9yIGFtb25nIHRoZSBoYXJuZXNzZXMgZm9yIHRoZSB2YXJpb3VzIGBNYXRMaXN0SXRlbWAgZmxhdm9ycy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqIEBkZXByZWNhdGVkIFVzZSBgY2xhc3NgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2xpc3QvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzQmFzZSBleHRlbmRzIENvbnRlbnRDb250YWluZXJDb21wb25lbnRIYXJuZXNzPE1hdExlZ2FjeUxpc3RJdGVtU2VjdGlvbj4ge1xuICBwcml2YXRlIF9saW5lcyA9IHRoaXMubG9jYXRvckZvckFsbCgnLm1hdC1saW5lJyk7XG4gIHByaXZhdGUgX2F2YXRhciA9IHRoaXMubG9jYXRvckZvck9wdGlvbmFsKGF2YXRhclNlbGVjdG9yKTtcbiAgcHJpdmF0ZSBfaWNvbiA9IHRoaXMubG9jYXRvckZvck9wdGlvbmFsKGljb25TZWxlY3Rvcik7XG5cbiAgLyoqIEdldHMgdGhlIGZ1bGwgdGV4dCBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW0uICovXG4gIGFzeW5jIGdldFRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS50ZXh0KHtleGNsdWRlOiBgJHtpY29uU2VsZWN0b3J9LCAke2F2YXRhclNlbGVjdG9yfWB9KTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBsaW5lcyBvZiB0ZXh0IChgbWF0LWxpbmVgIGVsZW1lbnRzKSBpbiB0aGlzIG5hdiBsaXN0IGl0ZW0uICovXG4gIGFzeW5jIGdldExpbmVzVGV4dCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgY29uc3QgbGluZXMgPSBhd2FpdCB0aGlzLl9saW5lcygpO1xuICAgIHJldHVybiBwYXJhbGxlbCgoKSA9PiBsaW5lcy5tYXAobCA9PiBsLnRleHQoKSkpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBsaXN0IGl0ZW0gaGFzIGFuIGF2YXRhci4gKi9cbiAgYXN5bmMgaGFzQXZhdGFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAhIShhd2FpdCB0aGlzLl9hdmF0YXIoKSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGxpc3QgaXRlbSBoYXMgYW4gaWNvbi4gKi9cbiAgYXN5bmMgaGFzSWNvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5faWNvbigpKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgbGlzdCBvcHRpb24gaXMgZGlzYWJsZWQuICovXG4gIGFzeW5jIGlzRGlzYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmhvc3QoKSkuaGFzQ2xhc3MoJ21hdC1saXN0LWl0ZW0tZGlzYWJsZWQnKTtcbiAgfVxufVxuIl19