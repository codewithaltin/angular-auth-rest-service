/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { MAT_MENU_PANEL, matMenuAnimations, _MatMenuBase, MAT_MENU_DEFAULT_OPTIONS, } from '@angular/material/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @docs-public MatMenu
 * @deprecated Use `MatMenu` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyMenu extends _MatMenuBase {
    constructor(elementRef, ngZone, defaultOptions, changeDetectorRef) {
        super(elementRef, ngZone, defaultOptions, changeDetectorRef);
        this._elevationPrefix = 'mat-elevation-z';
        this._baseElevation = 4;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: MatLegacyMenu, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: MAT_MENU_DEFAULT_OPTIONS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: MatLegacyMenu, selector: "mat-menu", host: { attributes: { "ngSkipHydration": "" }, properties: { "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null", "attr.mat-id-collision": "null" } }, providers: [{ provide: MAT_MENU_PANEL, useExisting: MatLegacyMenu }], exportAs: ["matMenu"], usesInheritance: true, ngImport: i0, template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n", styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: MatLegacyMenu, decorators: [{
            type: Component,
            args: [{ selector: 'mat-menu', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, exportAs: 'matMenu', host: {
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[attr.aria-describedby]': 'null',
                        'ngSkipHydration': '',
                        // This binding is used to ensure that the component ID doesn't clash with the `MatMenu`.
                        '[attr.mat-id-collision]': 'null',
                    }, animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems], providers: [{ provide: MAT_MENU_PANEL, useExisting: MatLegacyMenu }], template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n", styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_MENU_DEFAULT_OPTIONS]
                }] }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktbWVudS9tZW51LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2xlZ2FjeS1tZW51L21lbnUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWix3QkFBd0IsR0FFekIsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRWhDOzs7O0dBSUc7QUFtQkgsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZO0lBYzdDLFlBQ0UsVUFBbUMsRUFDbkMsTUFBYyxFQUNvQixjQUFxQyxFQUN2RSxpQkFBcUM7UUFFckMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFuQjVDLHFCQUFnQixHQUFHLGlCQUFpQixDQUFDO1FBQ3JDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO0lBbUJ0QyxDQUFDOzhHQXJCVSxhQUFhLGtFQWlCZCx3QkFBd0I7a0dBakJ2QixhQUFhLGlPQUZiLENBQUMsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUMsQ0FBQyx3RUM5Q3BFLCtvQkFvQkEsaTBERHlCYyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7OzJGQUdqRSxhQUFhO2tCQWxCekIsU0FBUzsrQkFDRSxVQUFVLG1CQUdILHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksWUFDM0IsU0FBUyxRQUNiO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07d0JBQzNCLHdCQUF3QixFQUFFLE1BQU07d0JBQ2hDLHlCQUF5QixFQUFFLE1BQU07d0JBQ2pDLGlCQUFpQixFQUFFLEVBQUU7d0JBQ3JCLHlGQUF5Rjt3QkFDekYseUJBQXlCLEVBQUUsTUFBTTtxQkFDbEMsY0FDVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsYUFDakUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxlQUFlLEVBQUMsQ0FBQzs7MEJBbUIvRCxNQUFNOzJCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIE5nWm9uZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1BVF9NRU5VX1BBTkVMLFxuICBtYXRNZW51QW5pbWF0aW9ucyxcbiAgX01hdE1lbnVCYXNlLFxuICBNQVRfTUVOVV9ERUZBVUxUX09QVElPTlMsXG4gIE1hdE1lbnVEZWZhdWx0T3B0aW9ucyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbi8qKlxuICogQGRvY3MtcHVibGljIE1hdE1lbnVcbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0TWVudWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudWAgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21lbnUuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ21hdE1lbnUnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtbGFiZWxdJzogJ251bGwnLFxuICAgICdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJzogJ251bGwnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdudWxsJyxcbiAgICAnbmdTa2lwSHlkcmF0aW9uJzogJycsXG4gICAgLy8gVGhpcyBiaW5kaW5nIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGNvbXBvbmVudCBJRCBkb2Vzbid0IGNsYXNoIHdpdGggdGhlIGBNYXRNZW51YC5cbiAgICAnW2F0dHIubWF0LWlkLWNvbGxpc2lvbl0nOiAnbnVsbCcsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFttYXRNZW51QW5pbWF0aW9ucy50cmFuc2Zvcm1NZW51LCBtYXRNZW51QW5pbWF0aW9ucy5mYWRlSW5JdGVtc10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfTUVOVV9QQU5FTCwgdXNlRXhpc3Rpbmc6IE1hdExlZ2FjeU1lbnV9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5TWVudSBleHRlbmRzIF9NYXRNZW51QmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBfZWxldmF0aW9uUHJlZml4ID0gJ21hdC1lbGV2YXRpb24teic7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBfYmFzZUVsZXZhdGlvbiA9IDQ7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIGBjaGFuZ2VEZXRlY3RvclJlZmAgcGFyYW1ldGVyIHdpbGwgYmVjb21lIGEgcmVxdWlyZWQgcGFyYW1ldGVyLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE1LjAuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgZGVmYXVsdE9wdGlvbnM6IE1hdE1lbnVEZWZhdWx0T3B0aW9ucyxcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KE1BVF9NRU5VX0RFRkFVTFRfT1BUSU9OUykgZGVmYXVsdE9wdGlvbnM6IE1hdE1lbnVEZWZhdWx0T3B0aW9ucyxcbiAgICBjaGFuZ2VEZXRlY3RvclJlZj86IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIGRlZmF1bHRPcHRpb25zLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwibWF0LW1lbnUtcGFuZWxcIlxuICAgIFtpZF09XCJwYW5lbElkXCJcbiAgICBbbmdDbGFzc109XCJfY2xhc3NMaXN0XCJcbiAgICAoa2V5ZG93bik9XCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCJcbiAgICAoY2xpY2spPVwiY2xvc2VkLmVtaXQoJ2NsaWNrJylcIlxuICAgIFtAdHJhbnNmb3JtTWVudV09XCJfcGFuZWxBbmltYXRpb25TdGF0ZVwiXG4gICAgKEB0cmFuc2Zvcm1NZW51LnN0YXJ0KT1cIl9vbkFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgIChAdHJhbnNmb3JtTWVudS5kb25lKT1cIl9vbkFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgcm9sZT1cIm1lbnVcIlxuICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsIHx8IG51bGxcIlxuICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieSB8fCBudWxsXCJcbiAgICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRieSB8fCBudWxsXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hdC1tZW51LWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19