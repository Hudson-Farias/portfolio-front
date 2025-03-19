export interface SocialNetworkI {
    id: number
    url: string
    icon: "github" | "gitlab" | "linkedin"
}


export interface SocialNetworksI {
    social_networks_header: SocialNetworkI[]
    social_networks_footer: SocialNetworkI[]
}
