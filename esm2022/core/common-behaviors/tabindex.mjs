/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
export function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
        }
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? coerceNumberProperty(value) : this.defaultTabIndex;
        }
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
            this.defaultTabIndex = defaultTabIndex;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9jb21tb24tYmVoYXZpb3JzL3RhYmluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBb0IzRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixJQUFPLEVBQ1AsZUFBZSxHQUFHLENBQUM7SUFFbkIsT0FBTyxLQUFNLFNBQVEsSUFBSTtRQUl2QixJQUFJLFFBQVE7WUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1lBQ3hCLHdGQUF3RjtZQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3RGLENBQUM7UUFFRCxZQUFZLEdBQUcsSUFBVztZQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQVpULGNBQVMsR0FBVyxlQUFlLENBQUM7WUFDNUMsb0JBQWUsR0FBRyxlQUFlLENBQUM7UUFZbEMsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NvbnN0cnVjdG9yLCBBYnN0cmFjdENvbnN0cnVjdG9yfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7Q2FuRGlzYWJsZX0gZnJvbSAnLi9kaXNhYmxlZCc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgaW50ZXJmYWNlIEhhc1RhYkluZGV4IHtcbiAgLyoqIFRhYmluZGV4IG9mIHRoZSBjb21wb25lbnQuICovXG4gIHRhYkluZGV4OiBudW1iZXI7XG5cbiAgLyoqIFRhYmluZGV4IHRvIHdoaWNoIHRvIGZhbGwgYmFjayB0byBpZiBubyB2YWx1ZSBpcyBzZXQuICovXG4gIGRlZmF1bHRUYWJJbmRleDogbnVtYmVyO1xufVxuXG50eXBlIEhhc1RhYkluZGV4Q3RvciA9IENvbnN0cnVjdG9yPEhhc1RhYkluZGV4PiAmIEFic3RyYWN0Q29uc3RydWN0b3I8SGFzVGFiSW5kZXg+O1xuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGRpcmVjdGl2ZSB3aXRoIGEgYHRhYkluZGV4YCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblRhYkluZGV4PFQgZXh0ZW5kcyBBYnN0cmFjdENvbnN0cnVjdG9yPENhbkRpc2FibGU+PihcbiAgYmFzZTogVCxcbiAgZGVmYXVsdFRhYkluZGV4PzogbnVtYmVyLFxuKTogSGFzVGFiSW5kZXhDdG9yICYgVDtcbmV4cG9ydCBmdW5jdGlvbiBtaXhpblRhYkluZGV4PFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxDYW5EaXNhYmxlPj4oXG4gIGJhc2U6IFQsXG4gIGRlZmF1bHRUYWJJbmRleCA9IDAsXG4pOiBIYXNUYWJJbmRleEN0b3IgJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIEhhc1RhYkluZGV4IHtcbiAgICBwcml2YXRlIF90YWJJbmRleDogbnVtYmVyID0gZGVmYXVsdFRhYkluZGV4O1xuICAgIGRlZmF1bHRUYWJJbmRleCA9IGRlZmF1bHRUYWJJbmRleDtcblxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6IHRoaXMuX3RhYkluZGV4O1xuICAgIH1cbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgLy8gSWYgdGhlIHNwZWNpZmllZCB0YWJJbmRleCB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZSAhPSBudWxsID8gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpIDogdGhpcy5kZWZhdWx0VGFiSW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==