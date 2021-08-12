import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";

export default function () {
	const x = ref(-1);
	const y = ref(-1);
	const handle = (event: MouseEvent) => {
		x.value = event.pageX;
		y.value = event.pageY;
	}

	onMounted(() => {
		window.addEventListener("click", handle);
	})

	onBeforeUnmount(() => {
		window.removeEventListener("click", handle)
	});

	return {
		x, y
	}
}