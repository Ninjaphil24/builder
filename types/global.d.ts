// assets/builder/types/global.d.ts
export { }

declare global {
    interface BootNavItem {
        route: string
        nav_button: string
    }

    interface Window {
        __BOOT__?: {
            nav?: BootNavItem[]
        }
    }
}
