import type { ReactNode } from "react"
import trueHealthLogo from "../assets/images/truehealth_logo_tp.png";
import supernovaSportsLogo from "../assets/images/supernova-sports-favicon.svg";

export type ServiceProps = {
    name: string | ReactNode
    nameAsString: string
    summary: string
    description: string | ReactNode 
    action?: () => void   
}

const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

// ALL SERVICES AND DESCRIPTIONS.
export const trueHealthProps: ServiceProps = {
    name: <img src={trueHealthLogo} alt="TrueHealth" />, 
    nameAsString: "TrueHealth", 
    summary: "A powerful healthcare data management system connecting hospitals, individuals and HMOs.", 
    description: 
        <>
            <p>TrueHealth is a comprehensive, cloud-based infrastructural system designed to modernize 
                healthcare management for individuals and institutions. It replaces traditional paper records
                with a secure, 24/7 accessible digital system that efficiently manages patient biodata, 
                treatment histories, and enables seamless appointment booking. Additionally, it provides 
                streamlined communication channels with insurance providers, 
                and enables all medical personnel and institutions using TrueHealth to message each other directly.
            </p>
        </>,
    action: openExternalLink.bind(null, "https://truehealth.works")
}

export const supernovaSportsProps: ServiceProps = {
    name: <img src={supernovaSportsLogo} alt="Supernova Sports" />, 
    nameAsString: "Supernova Sports",
    summary: "Supernova Sports is a digital service specializing in predicting the outcomes of football matches.", 
    description: 
        <>
            <p>Supernova Sports is an analytics service that uses carefully refined, transformed data and custom algorithms to predict 
                possible outcomes of football matches. With an accuracy exceeding 74% in live use, it's one of the most 
                accurate predictive tools in the market. It currently offers two subscription tiers.
            </p>
        </>,
    action: openExternalLink.bind(null, "https://supernova-sports.web.app")
}

export const finserProps: ServiceProps = {
    name: <p>Finser</p>, 
    nameAsString: "Finser",
    summary: "Finser helps you find services in Nigeria.", 
    description: 
        <>
            <p>Finser helps people find services in Nigeria. 
                Its focus is making it easier to discover providers and services relevant to what someone needs.</p>
        </>
}

export const leavesProps: ServiceProps = {
    name: <p>Leaves</p>,
    nameAsString: "Leaves", 
    summary: "A hybrid-anonymous text-based social network built to foster deeper connection.", 
    description: 
        <>
            <p>Leaves is a text-based social network that combines anonymous and 
                identified participation. It is designed to create room for more thoughtful 
                conversations and deeper connection.</p>
        </>
}

export const easyInventoryProps: ServiceProps = {
    name: <p>EasyInventory</p>, 
    nameAsString: "EasyInventory",
    summary: "An effective inventory and sales manager, made for stores of all kinds.", 
    description: 
        <>
            <p>EasyInventory is an inventory and sales manager made for stores of all kinds. It brings everyday stock and sales management into one focused tool.</p>
        </>
}

export const knowThisDocProps: ServiceProps = {
    name: <p>KnowThis<span>Doc</span></p>, 
    nameAsString: "KnowThisDoc",
    summary: "Understand a contract before signing. Gain insight into technical and other complex documents.", 
    description: 
        <>
            <p>KnowThisDoc helps people understand contracts and other complex documents before signing. It makes dense material easier to review and grasp.</p>
        </>
}

export const agentOneProps: ServiceProps = {
    name: <p>AgentOne</p>, 
    nameAsString: "AgentOne",
    summary: "Find available places for rent or sale around you.", 
    description: 
        <>
            <p>AgentOne helps people find available places for rent or sale around them. It focuses on connecting property discovery with the places people are looking to live.</p>
        </>
}

export const everyNigerianProps: ServiceProps = {
    name: <p>EveryNigerian</p>, 
    nameAsString: "EveryNigerian",
    summary: "An educational framework made to educate the Nigerian on things they should know.", 
    description: 
        <>
            <p>EveryNigerian is an educational framework focused on things Nigerians should know. It brings useful learning into a structure centered on everyday knowledge.</p>
        </>
}

// ALL SERVICES IN A LIST (FOR MAPPING RENDERING).
export const allServices = [
    trueHealthProps, supernovaSportsProps, finserProps, 
    leavesProps, easyInventoryProps, knowThisDocProps, 
    agentOneProps, everyNigerianProps
]