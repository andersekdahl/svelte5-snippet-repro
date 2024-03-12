import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        y: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MyComponentProps = typeof __propDef.props;
export type MyComponentEvents = typeof __propDef.events;
export type MyComponentSlots = typeof __propDef.slots;
export default class MyComponent extends SvelteComponent<MyComponentProps, MyComponentEvents, MyComponentSlots> {
}
export {};
