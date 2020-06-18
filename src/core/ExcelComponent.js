import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.unsubscribers = []

		this.prepare()
	}

	// настраив наш компонент до init
	prepare() {}

	//	vozvrachaet shablon componneta
	toHTML() {
		return ''
	}

// уведомляем слушателей про событие event
	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

// подписываемся на событие event
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscribers.push(unsub)
	}
	// инициализируем компонент
	// добавляем DOM слушателей
	init() {
		this.initDOMListeners()
	}

	// удаляем компонент
	// чистим DOM слушатели
	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
	}
}