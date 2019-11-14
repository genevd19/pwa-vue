export default (value) => {
    if( !value) return ''
        value = parseFloat(value)
        if(isNaN(value)) return ''
        return value.toFixed(2) + " €"
}