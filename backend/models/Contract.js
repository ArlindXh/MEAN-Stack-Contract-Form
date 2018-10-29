import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Contract = new Schema({

    titulliProkurimit: {
        type: String
    },
    dataPublikimit: {
        type: String
    },
    dataNenshkrimit: {
        type: String
    },
    vleraFillestare: {
        type: String
    },
    vleraFinale: {
        type: String
    },
    drejtoria: {
        type: String
    }

})

export default mongoose.model('Contract', Contract);