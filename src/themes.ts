export const themes = {
    dark: {
        colors: {
            text: '#efefef',
            background: {
                _: 'radial-gradient(circle at center, #333333 0%, #2e2e2e 100%)',
                contrast: 'radial-gradient(circle at center, #efefef 0%, #b8b8b8 100%)'
            },
            primary: '#efefef',
            primary_dark: '#b8b8b8',
            secondary: '#333333',
            secondary_dark: '#2e2e2e'
        },
        invert: 'invert(0%)'
    },
    light: {
        colors: {
            text: '#2e2e2e',
            background: {
                _: 'radial-gradient(circle at center, #efefef 0%, #b8b8b8 100%)',
                contrast: 'radial-gradient(circle at center, #333333 0%, #2e2e2e 100%)'
            },
            primary: '#2e2e2e',
            primary_dark: '#333333',
            secondary: '#efefef',
            secondary_dark: '#b8b8b8'
        },
        invert: 'invert(100%)'
    }
};
