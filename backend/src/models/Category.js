class Category {
    constructor (id = null, name) {
        this._id = id
        this._name = name
    }

    getId() {
        return this._id
    }

    setId(id) {
        this._id = id
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }
}