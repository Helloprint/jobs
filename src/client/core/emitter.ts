export interface Ilisteners {
    [index: string]: IlistenerEvents[]
}
export interface IlistenerEvents {
    once: boolean
    ran: number
    event: Function
}

export class Emitter {
    public listeners: Ilisteners = {}

    on(eventName: string, listener: Function) {
        if (!this.listeners[eventName]) this.listeners[eventName] = []
        this.listeners[eventName].push({ once: false, ran: 0, event: listener })
    }

    once(eventName: string, listener: Function) {
        if (!this.listeners[eventName]) this.listeners[eventName] = []
        this.listeners[eventName].push({ once: true, ran: 0, event: listener })
    }

    emit(eventName: string, params?: any) {
        for (let l of this.listeners[eventName] || []) {
            if (l.ran < 1 || !l.once) {
                l.ran++
                l.event(params)
            }
        }
    }
}

export let emitter = new Emitter()

