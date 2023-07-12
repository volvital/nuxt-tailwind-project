import { mapStores, mapState, mapActions, defineStore } from 'pinia'

const imageURL = "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/"
const infoUrl = "https://mintit.studio/collections/the-angel-doggos/tokens/"
const imagesDogs = [
	{
		"id": 22,
		"imageURL": imageURL + 22,
		"infoUrl": infoUrl + "/7aF_qxgXMriS8o1ppiMk8cDiSPbghtYpl-YpELvVNVk"
	},
	{
		"id": 23,
		"imageURL": imageURL + 23,
		"infoUrl": infoUrl + "/4ACtieCCzMd8Di23k0L17I-K5bHxGge2vX5MqVd2yRM"
	},
	{
		"id": 24,
		"imageURL": imageURL + 24,
		"infoUrl": infoUrl + "/Z9JQw5u1ZTEf5MBR7rsL9EkW8PcZgg3AJCXxF1Fg3_E"
	},
	{
		"id": 25,
		"imageURL": imageURL + 25,
		"infoUrl": infoUrl + "/gX-vvvXBQQSgCoIqVmrOU7oMpV85WNhP1TCtHa4BXRQ"
	},
	{
		"id": 26,
		"imageURL": imageURL + 26,
		"infoUrl": infoUrl + "/mSR_DrsiBwMB9CiY_tKrLuNgALC57_vGSOjl09K8KU"
	}
]

export const useDogImageStore = defineStore('dogs', {
	state: () => ({
		id: 0,
		image: {}
	}),
	getters: {
		getId(state) {
			return state.id
		},
		getImage(state) {
			return state.image
		}
	},
	actions: {
		openModal(id) {
      this.setId(id);
      this.setImage(id);
    },
		setId(id) {
			this.id = id;
		},
		setImage(id) {
      let image = imagesDogs.find(item => item.id === id);
      this.image = image;
    }
	}
})

export default {
	imagesDogs
}

