export default class XHR {
    static get<T>(url: string) {

        return new Promise<T>((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.response))
                }
            }
            xhr.onerror = () => reject('Error')
            xhr.send()
        })
    }


    static post<T>(url: string, data:any) {
        
                return new Promise<T>((resolve, reject) => {
                    const xhr = new XMLHttpRequest()
                    xhr.open('POST', url, true)
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            resolve(JSON.parse(xhr.response))
                        }
                    }
                    xhr.onerror = () => reject('Error')
                    xhr.send(data)
                })
            }
}