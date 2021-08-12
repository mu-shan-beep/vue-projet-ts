import { ref } from "vue"

import axios from "axios"

export default function <T>(url: string) {
	const loading = ref(true);
	const data = ref<T | null>(null);
	const errorMsg = ref("");

	axios.get(url).then((res) => {
		loading.value = false;
		data.value = res.data;
		console.log(res);
		
	}).catch((err) => {
		errorMsg.value = err.message
	})
	return {
		loading,
		data,
		errorMsg
	}
}