class ActorModel {
    constructor(actor_array) {
        this.id = actor_array.id
        this.first_name = actor_array.first_name
        this.last_name = actor_array.last_name
    }

    getFullName() {
        return this.first_name + " " + this.last_name
    }
}

export default ActorModel