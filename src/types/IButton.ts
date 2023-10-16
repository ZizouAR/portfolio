export default interface IButton {
    children: string;
    onClick?: {
        (): void
    },
    anchor?: string;
}