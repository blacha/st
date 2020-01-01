import { StModuleHooks, StModuleState } from './module';
import { St } from '../st';
import { Id } from '@st/shared';
import { ClientLibEvent, PheStatic, ClientLibEventSource, ClientLibEventName } from '@cncta/clientlib';

declare const phe: PheStatic;

export interface EventContext {
    source: ClientLibEventSource;
    name: ClientLibEventName;
    type: ClientLibEvent;
    cb: Function;
}

export abstract class StModuleBase implements StModuleHooks {
    id: string = Id.generate();
    name: string;
    state = StModuleState.Init;
    st: St;

    events: EventContext[] = [];

    onStart?(): Promise<void>;
    onStop?(): Promise<void>;

    async start(st: St): Promise<void> {
        this.state = StModuleState.Starting;
        this.st = st;
        await this.onStart?.();
        this.state = StModuleState.Started;
    }

    async stop(): Promise<void> {
        this.state = StModuleState.Stopping;
        await this.onStop?.();
        // Destroy events
        for (const event of this.events) {
            phe.cnc.Util.detachNetEvent(event.source, event.name, event.type, this, event.cb);
        }
        this.state = StModuleState.Stopped;
    }

    addEvent(source: ClientLibEventSource, name: ClientLibEventName, type: ClientLibEvent, cb: Function) {
        this.events.push({ source, name, type, cb });
        phe.cnc.Util.attachNetEvent(source, name, type, this, cb);
    }

    get isStopping(): boolean {
        return this.state == StModuleState.Stopped || this.state == StModuleState.Stopping;
    }

    get isReady(): boolean {
        return this.state == StModuleState.Started;
    }
}
