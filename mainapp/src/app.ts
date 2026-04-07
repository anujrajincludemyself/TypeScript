const anchor = document.querySelector<HTMLAnchorElement>('a');
console.log('anchor:', anchor);

const form = document.querySelector<HTMLFormElement>('.new-item-form');
console.log('form:', form);

if (form) {
	console.log('form method:', form.method);
}


