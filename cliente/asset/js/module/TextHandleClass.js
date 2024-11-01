export class TextHandleClass {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = false;
    }

    async getAllNotes(get) {
        try {
            const response = await fetch(this._url + get);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    postNote(post, data, onSuccesCallBack, onErrorCallBack) {
        fetch(this._url + post, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errData => {
                        throw new Error(errData.message || 'Error de red');
                    });
                }
                return response.json();
            })
            .then(responseData => {
                this._lastQueryStatus = true;
                onSuccesCallBack(responseData);
            })
            .catch(error => {
                this._lastQueryStatus = false;
                onErrorCallBack(error);
            });
    }

    putNote(put, data, onSuccesCallBack, onErrorCallBack) {
        fetch(this._url + put, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errData => {
                        throw new Error(errData.message || 'Error de red');
                    });
                }
                return response.json();
            })
            .then(response => {
                onSuccesCallBack(response);
            })
            .catch((error) => {
                onErrorCallBack(error);
            })
    }

    getNoteByMonth() {

    }
}