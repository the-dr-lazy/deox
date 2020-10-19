import { getType } from '../get-type'

// @dts-jest:group getType

const type = '[Todo] truncate'
type Type = typeof type

const viaType = { type: <Type>type }
const viaToString = {
    toString(): Type {
        return type
    },
}

// @dts-jest:pass:snap
getType(viaType)

// @dts-jest:pass:snap
getType(viaToString)
