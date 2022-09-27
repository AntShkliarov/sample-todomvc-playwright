export class Sample {
    count = 0
    async asyncFunc() {
        const value = 'async' + this.count
        this.count++
        return value
    }

    syncFunc() {
        this.asyncFunc()
        const value = 'sync' + this.count
        this.count++
        return value
    }
}