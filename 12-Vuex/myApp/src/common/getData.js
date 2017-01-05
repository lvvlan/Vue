/**
 * Des
 * Created by luowei5 on 2017/1/3.
 * E-mail luowei5@jd.com
 * Update 2017/1/3
 */
function getData (url, {
    type = 'GET',
    data = null,
    dataType = 'json'
}) {
    return new Promise((resolve, reject) => {
        if (data == null){
            $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                success: function (data) {
                    resolve(data);
                },
                fail: function (data) {
                    reject(data);
                }
            });
        }
        else{
            $.ajax({
                url: url,
                type: type,
                data: data,
                dataType: dataType,
                success: function (data) {
                    resolve(data);
                },
                fail: function (data) {
                    reject(data);
                }
            });
        }
    })
}

export default function (url, json) {
    return typeof json == 'undefined' ? getData(url, {}) : getData(url, json);
}