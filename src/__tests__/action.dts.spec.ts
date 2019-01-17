import { action } from '../action'

// @dts-jest:group action

// @dts-jest:pass:snap
action('[Todo] truncate')

// @dts-jest:pass:snap
action('[Todo] fetch rejected', new Error())

// @dts-jest:pass:snap
action('[Todo] fetch rejected', new Error(), { status: 403 })

// @dts-jest:pass:snap
action('[Todo] add', { name: `Read Robbin's` })

// @dts-jest:pass:snap
action('[Todo] add', { name: `Read Robbin's` }, 'Book is on bookshelf')

// @dts-jest:pass:snap
action('[Todo] add', { name: `Read Robbin's` }, 'Book is on bookshelf')
