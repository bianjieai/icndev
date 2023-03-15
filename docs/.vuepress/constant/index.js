export const EMAIL_REGEXP = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

export const scrollConfig =  {
	detectResize: false,
	rail: {
		opacity: 1,
		background: 'rgba(137, 65, 255, 0.34)',
		size: '6px',
	},
	bar: {
		keepShow: true,
		size: '6px',
		minSize: 0.1,
		background: 'rgba(137, 65, 255, 1)',
	},
	vuescroll: {
		wheelScrollDuration: 0,
		wheelDirectionReverse: false,
		locking: true,
		checkShifKey: true,
	},
}