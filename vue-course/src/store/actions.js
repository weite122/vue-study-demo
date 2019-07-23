import { getAppName } from '@/api/app.js'

const actions = {
    updateAppName ({ commit }) {
        getAppName().then(res => {
            const { info: { appName } } = res
            commit('SET_APP_NAME', appName)
        }).catch(err => {
            console.log(err) 
        })
    }
} 
export default actions