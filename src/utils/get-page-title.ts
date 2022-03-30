
const title = 'vue3 admin pro'

const getPageTitle = (key:string | undefined) => {
    if(!key){
        return title
    }
    return key
}
export default getPageTitle