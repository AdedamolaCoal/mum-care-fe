import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-XI5UI3QN.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EnvironmentInjector,
  Inject,
  Injectable,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation$1,
  createComponent,
  fromEvent,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-RN5OIHEE.js";
import {
  Subject,
  filter
} from "./chunk-GAKYKRKS.js";
import "./chunk-WKYGNSYM.js";

// node_modules/ngx-modal-ease/fesm2022/ngx-modal-ease.mjs
var _c0 = ["modal"];
var _c1 = ["overlay"];
var _c2 = ["*"];
var _ModalComponent = class _ModalComponent {
  constructor(modalService, element) {
    this.modalService = modalService;
    this.element = element;
    this.modalLeaveAnimation = "";
    this.overlayLeaveAnimation = "";
    this.overlayClosed = false;
    this.modalClosed = false;
    this.layerLevel = 0;
  }
  /**
   * Initialise variable and escape key on document.
   * Multiple modals might register multiple event listener, hence the 'layerLevel' variable and two times the condition check for the escape option.
   */
  ngOnInit() {
    this.options = this.modalService.options;
    this.modalService.modalInstances.push(this);
    this.modalService.layerLevel += 1;
    this.layerLevel = this.modalService.layerLevel;
    if (this.options?.actions?.escape === false)
      return;
    this.escapeKeySubscription = fromEvent(document, "keydown").pipe(filter((event) => event.key === "Escape")).subscribe(() => {
      if (this.options?.actions?.escape === false)
        return;
      if (this.layerLevel === this.modalService.layerLevel) {
        this.modalService.close();
      }
    });
  }
  onClose() {
    if (this.options?.actions?.click === false)
      return;
    this.modalService.close();
  }
  ngAfterViewInit() {
    this.addOptionsAndAnimations();
  }
  /**
   * Add options and animations
   * Apply user style and animations, listen to animation ends. Apply z-indexes on overlay and modal, with 1000 as incremental value.
   */
  addOptionsAndAnimations() {
    this.modal.nativeElement.style.width = this.options?.size?.width || "";
    this.modal.nativeElement.style.maxWidth = this.options?.size?.maxWidth || "";
    this.modal.nativeElement.style.height = this.options?.size?.height || "";
    this.modal.nativeElement.style.maxHeight = this.options?.size?.maxHeight || "";
    this.modal.nativeElement.style.padding = this.options?.size?.padding || "0.5rem";
    const overlayZIndex = 1e3 * this.modalService.modalInstances.length;
    this.overlay.nativeElement.style.zIndex = `${overlayZIndex}`;
    this.modal.nativeElement.style.zIndex = `${overlayZIndex + 1e3}`;
    this.modalLeaveAnimation = this.options?.modal?.leave || "";
    this.overlayLeaveAnimation = this.options?.overlay?.leave || "";
    this.modal.nativeElement.style.animation = this.options?.modal?.enter || "";
    this.modal.nativeElement.style.top = this.options?.modal?.top || "50%";
    this.modal.nativeElement.style.left = this.options?.modal?.left || "50%";
    this.overlay.nativeElement.style.animation = this.options?.overlay?.enter || "";
    this.overlay.nativeElement.style.backgroundColor = this.options?.overlay?.backgroundColor || "";
    this.modalAnimationEnd = fromEvent(this.modal.nativeElement, "animationend");
    this.overlayAnimationEnd = fromEvent(this.overlay.nativeElement, "animationend");
  }
  removeElementIfNotAnimated(element, animation) {
    if (!animation) {
      element.remove();
      if (element.classList.contains("ngx-modal")) {
        this.modalClosed = true;
      } else {
        this.overlayClosed = true;
      }
    }
  }
  /**
   * Clean the DOM
   * Apply the leaving animations and clean the DOM. Three different use cases.
   * Last In First Out
   */
  close() {
    this.modalService.layerLevel -= 1;
    this.modal.nativeElement.style.animation = this.modalLeaveAnimation;
    this.overlay.nativeElement.style.animation = this.overlayLeaveAnimation;
    this.escapeKeySubscription?.unsubscribe();
    if (!this.modalLeaveAnimation && !this.overlayLeaveAnimation) {
      this.element.nativeElement.remove();
      return;
    }
    this.removeElementIfNotAnimated(this.modal.nativeElement, this.modalLeaveAnimation);
    this.removeElementIfNotAnimated(this.overlay?.nativeElement, this.overlayLeaveAnimation);
    this.modalAnimationEnd.subscribe(() => {
      this.modal.nativeElement.remove();
      this.modalClosed = true;
      this.removeModalComponent(this.overlayClosed);
    });
    this.overlayAnimationEnd.subscribe(() => {
      this.overlay.nativeElement.remove();
      this.overlayClosed = true;
      this.removeModalComponent(this.modalClosed);
    });
  }
  removeModalComponent(modalOrOverlayClosed) {
    if (modalOrOverlayClosed) {
      this.element.nativeElement.remove();
    }
  }
};
_ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || _ModalComponent)(ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(ElementRef));
};
_ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalComponent,
  selectors: [["app-modal"]],
  viewQuery: function ModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modal = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 6,
  vars: 0,
  consts: [["modal", ""], ["overlay", ""], [1, "modal-container"], [1, "ngx-modal"], [1, "ngx-overlay", 3, "click"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 2)(1, "section", 3, 0);
      ɵɵprojection(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 4, 1);
      ɵɵlistener("click", function ModalComponent_Template_div_click_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClose());
      });
      ɵɵelementEnd()();
    }
  },
  dependencies: [CommonModule],
  styles: [".ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0006;z-index:1000}.ngx-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:.5rem;max-width:100%;z-index:2000}@keyframes enter-going-down{0%{transform:translate(-50%,-60%)}to{transform:translate(-50%,-50%)}}@keyframes enter-scaling{0%{transform:scale(.8) translate(-50%,-50%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}@keyframes enter-scale-down{0%{transform:scale(1.5) translate(-50%,-60%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes bounce-in{0%{transform:translate(-50%,-85%)}20%,80%,to{transform:translate(-50%,-50%)}60%{transform:translate(-50%,-65%)}90%{transform:translate(-50%,-53%)}}@keyframes scale-rotate{30%{transform:scale(1.05) translate(-50%,-50%);transform-origin:left}40%,60%{transform:rotate(-3deg) scale(1.05) translate(-50%,-50%);transform-origin:left}50%{transform:rotate(3deg) scale(1.05) translate(-50%,-50%);transform-origin:left}70%{transform:rotate(0) scale(1.05) translate(-50%,-50%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var ModalComponent = _ModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "app-modal",
      imports: [CommonModule],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="modal-container">\n  <section class="ngx-modal" #modal>\n    <ng-content></ng-content>\n  </section>\n\n  <div class="ngx-overlay" #overlay (click)="onClose()"></div>\n</div>\n',
      styles: [".ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0006;z-index:1000}.ngx-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:.5rem;max-width:100%;z-index:2000}@keyframes enter-going-down{0%{transform:translate(-50%,-60%)}to{transform:translate(-50%,-50%)}}@keyframes enter-scaling{0%{transform:scale(.8) translate(-50%,-50%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}@keyframes enter-scale-down{0%{transform:scale(1.5) translate(-50%,-60%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes bounce-in{0%{transform:translate(-50%,-85%)}20%,80%,to{transform:translate(-50%,-50%)}60%{transform:translate(-50%,-65%)}90%{transform:translate(-50%,-53%)}}@keyframes scale-rotate{30%{transform:scale(1.05) translate(-50%,-50%);transform-origin:left}40%,60%{transform:rotate(-3deg) scale(1.05) translate(-50%,-50%);transform-origin:left}50%{transform:rotate(3deg) scale(1.05) translate(-50%,-50%);transform-origin:left}70%{transform:rotate(0) scale(1.05) translate(-50%,-50%);transform-origin:left}to{transform:scale(1) translate(-50%,-50%);transform-origin:left}}\n"]
    }]
  }], () => [{
    type: ModalService
  }, {
    type: ElementRef
  }], {
    modal: [{
      type: ViewChild,
      args: ["modal"]
    }],
    overlay: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var _ModalService = class _ModalService {
  constructor(appRef, injector, platformId) {
    this.appRef = appRef;
    this.injector = injector;
    this.modalInstances = [];
    this.layerLevel = 0;
    this.isBrowser = true;
    this.modalSubjects = [];
    this.isBrowser = isPlatformBrowser(platformId);
  }
  /**
   * Opens a custom component within a modal.
   * @param componentToCreate The custom component to display within the modal.
   * @param options Additional options for configuring the modal appearance and animations.
   * @returns A RxJs Subject that will emit custom data on closing the modal.
   * ```
   * this.modalService.open(ModalContentComponent, {
   *   modal: {
   *     enter: 'enter-scale-down 0.1s ease-out',
   *     leave: 'fade-out 0.5s',
   *   },
   *   overlay: {
   *     leave: 'fade-out 0.3s',
   *   },
   *   data: {
   *     type: 'Angular modal library',
   *   },
   * })
   * .subscribe((dataFromComponent) => {
   *    ...
   * });
   * ```
   */
  open(componentToCreate, options) {
    this.options = options;
    this.modalSubject = new Subject();
    this.openComponent(componentToCreate, options);
    return this.modalSubject;
  }
  openComponent(componentToCreate, options) {
    if (!this.isBrowser)
      return;
    this.newComponent = createComponent(componentToCreate, {
      environmentInjector: this.injector
    });
    this.newModalComponent = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[this.newComponent.location.nativeElement]]
    });
    this.instantiateProps(options?.data);
    this.modalSubjects.push({
      subject: this.modalSubject
    });
    document.body.appendChild(this.newModalComponent.location.nativeElement);
    this.appRef.attachView(this.newComponent.hostView);
    this.appRef.attachView(this.newModalComponent.hostView);
  }
  instantiateProps(data = {}) {
    for (const key of Object.keys(data)) {
      this.newComponent.instance[key] = data[key];
    }
  }
  /**
   * Close the current modal.
   * @param data The optional data to emit on closing the modal (communication from modal to caller).
   */
  close(data) {
    this.modalInstances.pop()?.close();
    if (this.modalSubjects.length === 0)
      return;
    const currentSubject = this.modalSubjects.pop();
    currentSubject.subject.next(data);
    currentSubject.subject.complete();
  }
  /**
   * Close all modal instances.
   * Respective animations will be applied.
   */
  closeAll() {
    for (let i = this.modalInstances.length - 1; i > -1; i--) {
      this.modalInstances[i].close();
    }
    this.modalSubjects = [];
  }
};
_ModalService.ɵfac = function ModalService_Factory(t) {
  return new (t || _ModalService)(ɵɵinject(ApplicationRef), ɵɵinject(EnvironmentInjector), ɵɵinject(PLATFORM_ID));
};
_ModalService.ɵprov = ɵɵdefineInjectable({
  token: _ModalService,
  factory: _ModalService.ɵfac,
  providedIn: "root"
});
var ModalService = _ModalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ApplicationRef
  }, {
    type: EnvironmentInjector
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
export {
  ModalService
};
//# sourceMappingURL=ngx-modal-ease.js.map
