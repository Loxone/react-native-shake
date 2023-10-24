import { TurboModule } from 'react-native';
interface Spec extends TurboModule {
    addListener(eventName: string): void;
    removeListeners(count: number): void;
}
declare const _default: Spec;
export default _default;
