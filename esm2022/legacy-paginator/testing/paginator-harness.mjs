/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatLegacySelectHarness } from '@angular/material/legacy-select/testing';
import { _MatPaginatorHarnessBase, } from '@angular/material/paginator/testing';
/**
 * Harness for interacting with a standard mat-paginator in tests.
 * @deprecated Use `MatPaginatorHarness` from `@angular/material/paginator/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyPaginatorHarness extends _MatPaginatorHarnessBase {
    constructor() {
        super(...arguments);
        this._nextButton = this.locatorFor('.mat-paginator-navigation-next');
        this._previousButton = this.locatorFor('.mat-paginator-navigation-previous');
        this._firstPageButton = this.locatorForOptional('.mat-paginator-navigation-first');
        this._lastPageButton = this.locatorForOptional('.mat-paginator-navigation-last');
        this._select = this.locatorForOptional(MatLegacySelectHarness.with({
            ancestor: '.mat-paginator-page-size',
        }));
        this._pageSizeFallback = this.locatorFor('.mat-paginator-page-size-value');
        this._rangeLabel = this.locatorFor('.mat-paginator-range-label');
    }
    /** Selector used to find paginator instances. */
    static { this.hostSelector = '.mat-paginator'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatPaginatorHarness` that meets
     * certain criteria.
     * @param options Options for filtering which paginator instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyPaginatorHarness, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbGVnYWN5LXBhZ2luYXRvci90ZXN0aW5nL3BhZ2luYXRvci1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx3QkFBd0IsR0FFekIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQUF2RTs7UUFHWSxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNoRSxvQkFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN4RSxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM5RSxvQkFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzVFLFlBQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQ3pDLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUMxQixRQUFRLEVBQUUsMEJBQTBCO1NBQ3JDLENBQUMsQ0FDSCxDQUFDO1FBQ1Esc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBV3hFLENBQUM7SUF2QkMsaURBQWlEO2FBQzFDLGlCQUFZLEdBQUcsZ0JBQWdCLEFBQW5CLENBQW9CO0lBYXZDOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFtQyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SGFybmVzc1ByZWRpY2F0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRMZWdhY3lTZWxlY3RIYXJuZXNzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0L3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgX01hdFBhZ2luYXRvckhhcm5lc3NCYXNlLFxuICBQYWdpbmF0b3JIYXJuZXNzRmlsdGVycyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBzdGFuZGFyZCBtYXQtcGFnaW5hdG9yIGluIHRlc3RzLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBNYXRQYWdpbmF0b3JIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3IvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5UGFnaW5hdG9ySGFybmVzcyBleHRlbmRzIF9NYXRQYWdpbmF0b3JIYXJuZXNzQmFzZSB7XG4gIC8qKiBTZWxlY3RvciB1c2VkIHRvIGZpbmQgcGFnaW5hdG9yIGluc3RhbmNlcy4gKi9cbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LXBhZ2luYXRvcic7XG4gIHByb3RlY3RlZCBfbmV4dEJ1dHRvbiA9IHRoaXMubG9jYXRvckZvcignLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1uZXh0Jyk7XG4gIHByb3RlY3RlZCBfcHJldmlvdXNCdXR0b24gPSB0aGlzLmxvY2F0b3JGb3IoJy5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tcHJldmlvdXMnKTtcbiAgcHJvdGVjdGVkIF9maXJzdFBhZ2VCdXR0b24gPSB0aGlzLmxvY2F0b3JGb3JPcHRpb25hbCgnLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1maXJzdCcpO1xuICBwcm90ZWN0ZWQgX2xhc3RQYWdlQnV0dG9uID0gdGhpcy5sb2NhdG9yRm9yT3B0aW9uYWwoJy5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tbGFzdCcpO1xuICBwcm90ZWN0ZWQgX3NlbGVjdCA9IHRoaXMubG9jYXRvckZvck9wdGlvbmFsKFxuICAgIE1hdExlZ2FjeVNlbGVjdEhhcm5lc3Mud2l0aCh7XG4gICAgICBhbmNlc3RvcjogJy5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZScsXG4gICAgfSksXG4gICk7XG4gIHByb3RlY3RlZCBfcGFnZVNpemVGYWxsYmFjayA9IHRoaXMubG9jYXRvckZvcignLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLXZhbHVlJyk7XG4gIHByb3RlY3RlZCBfcmFuZ2VMYWJlbCA9IHRoaXMubG9jYXRvckZvcignLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwnKTtcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlYXJjaCBmb3IgYSBgTWF0UGFnaW5hdG9ySGFybmVzc2AgdGhhdCBtZWV0c1xuICAgKiBjZXJ0YWluIGNyaXRlcmlhLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBmaWx0ZXJpbmcgd2hpY2ggcGFnaW5hdG9yIGluc3RhbmNlcyBhcmUgY29uc2lkZXJlZCBhIG1hdGNoLlxuICAgKiBAcmV0dXJuIGEgYEhhcm5lc3NQcmVkaWNhdGVgIGNvbmZpZ3VyZWQgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICovXG4gIHN0YXRpYyB3aXRoKG9wdGlvbnM6IFBhZ2luYXRvckhhcm5lc3NGaWx0ZXJzID0ge30pOiBIYXJuZXNzUHJlZGljYXRlPE1hdExlZ2FjeVBhZ2luYXRvckhhcm5lc3M+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUoTWF0TGVnYWN5UGFnaW5hdG9ySGFybmVzcywgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==