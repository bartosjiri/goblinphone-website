const characterMap = {
	a: ['a', 'ᵃ', 'ₐ'],
	b: ['b', 'ᵇ'],
	c: ['c', 'ᶜ'],
	d: ['d', 'ᵈ'],
	e: ['e', 'ᵉ', 'ₑ'],
	f: ['f', 'ᶠ'],
	g: ['g', 'ᶢ'],
	h: ['h', 'ʰ', 'ᵸ'],
	i: ['i', 'ᶤ', 'ᵢ'],
	j: ['j', 'ʲ', 'ᶨ'],
	k: ['k', 'ᵏ', 'ᴷ', 'ₖ'],
	l: ['l', 'ˡ', 'ᶪ'],
	m: ['m', 'ᵐ', 'ᴹ', 'ₘ'],
	n: ['n', 'ⁿ'],
	o: ['o', 'ᵒ', 'ₒ'],
	p: ['p', 'ᵖ', 'ᵖ'],
	q: ['q'],
	r: ['r', 'ʳ', 'ᵣ'],
	s: ['s', 'ₛ'],
	t: ['t', 'ᵗ'],
	u: ['u', 'ᵘ', 'ᵤ'],
	v: ['v', 'ᵛ', 'ᵥ'],
	w: ['w', 'ᵂ'],
	x: ['x', 'ˣ', 'ᵡ', 'ₓ'],
	y: ['y', 'ᵧ'],
	z: ['z', 'ᶻ'],
	'0': ['0', '⁰', '₀'],
	'1': ['1', '¹', '₁'],
	'2': ['2', '²', '₂'],
	'3': ['3', '³', '₃'],
	'4': ['4', '⁴', '₄'],
	'5': ['5', '⁵', '₅'],
	'6': ['6', '⁶', '₆'],
	'7': ['7', '⁷', '₇'],
	'8': ['8', '⁸', '₈'],
	'9': ['9', '⁹', '₉']
};

export const generateTranslation = (input: string) => {
	let output = '';

	if (!input?.length) {
		return output;
	}

	for (let i = 0; i < input.length; i++) {
		const character = input[i].toLowerCase();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const characterMapEntry = (characterMap as any)[character];

		if (characterMapEntry) {
			output += characterMapEntry[Math.floor(Math.random() * characterMapEntry.length)];
		} else {
			output += character;
		}
	}

	return output;
};
