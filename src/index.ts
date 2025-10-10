import {PluginDefinition} from "@yaakapp/api";

export const plugin: PluginDefinition = {
    themes: [
        {
            id: "yaak-early-to-bed",
            label: "Early to Bed",
            dark: true,
            base: {
                surface: 'hsl(231, 20%, 20%)',
                surfaceHightlight: 'hsl(247, 20%, 33%)',
                text: 'hsl(240, 6%, 87%)',
                textSubtle: 'hsl(240, 2%, 67%)',
                textSubtlest: 'hsl(240, 1%, 47%)',
                border: 'hsl(230, 37%, 29%)',
                borderSubtle: 'hsl(230, 37%, 35%)',
                primary: 'hsl(198, 62%, 76%)',
                secondary: 'hsl(231, 100%, 86%)',
                info: 'hsl(70, 71%, 84%)',
                success: 'hsl(180, 58%, 38%)',
                notice: 'hsl(21, 45%, 79%)',
                warning: 'hsl(41, 95%, 74%)',
                danger: 'hsl(20, 51%, 62%)'
            },
            components: {
                sidebar: {
                    surface: 'hsl(231, 20%, 20%)',
                    border: 'hsl(230, 37%, 29%)',
                    borderSubtle: 'hsl(230, 37%, 35%)',
                },
                appHeaader: {
                    surface: 'hsl(215, 100%, 14%)',
                    border: 'hsl(215, 100%, 14%)',
                },
                templateTag: {
                    surface: 'hsl(230, 37%, 29%)',
                    text: 'hsl(0, 0%, 100%)',
                },
                toast: {
                    surface: 'hsl(231, 20%, 20%)',
                    border: 'hsl(230, 37%, 29%)',
                },
            },
        },
    ]
};
