import type { ReactNode } from "react"

export type ServiceProps = {
    name: string | ReactNode
    nameAsString: string
    summary: string
    description: string | ReactNode    
}

// ALL SERVICES AND DESCRIPTIONS.
export const trueHealthProps: ServiceProps = {
    name: <p>True<span>Health</span></p>, 
    nameAsString: "TrueHealth", 
    summary: "A powerful healthcare data management system, built for hospitals, individuals and HMOs.", 
    description: 
        <>
            <p></p>
        </>
}

export const supernovaSportsProps: ServiceProps = {
    name: <p>Supernova Sports</p>, 
    nameAsString: "Supernova Sports",
    summary: "A data and logic engine for predicting the outcomes of football matches.", 
    description: 
        <>
            <p></p>
        </>
}

export const finserProps: ServiceProps = {
    name: <p>Finser</p>, 
    nameAsString: "Finser",
    summary: "Finser helps you find services in Nigeria.", 
    description: 
        <>
            <p></p>
        </>
}

export const leavesProps: ServiceProps = {
    name: <p>Leaves</p>,
    nameAsString: "Leaves", 
    summary: "A hybrid-anonymous text-based social network built to foster deeper connection.", 
    description: 
        <>
            <p></p>
        </>
}

export const easyInventoryProps: ServiceProps = {
    name: <p>EasyInventory</p>, 
    nameAsString: "EasyInventory",
    summary: "An effective inventory and sales manager, made for stores of all kinds.", 
    description: 
        <>
            <p></p>
        </>
}

export const knowThisDocProps: ServiceProps = {
    name: <p>KnowThis<span>Doc</span></p>, 
    nameAsString: "KnowThisDoc",
    summary: "Understand a contract before signing. Gain insight into technical and other complex documents.", 
    description: 
        <>
            <p></p>
        </>
}

export const agentOneProps: ServiceProps = {
    name: <p>AgentOne</p>, 
    nameAsString: "AgentOne",
    summary: "Find available places for rent or sale around you.", 
    description: 
        <>
            <p></p>
        </>
}

export const everyNigerianProps: ServiceProps = {
    name: <p>EveryNigerian</p>, 
    nameAsString: "EveryNigerian",
    summary: "An educational framework made to educate the Nigerian on things they should know.", 
    description: 
        <>
            <p></p>
        </>
}

// ALL SERVICES IN A LIST (FOR MAPPING RENDERING).
export const allServices = [
    trueHealthProps, supernovaSportsProps, finserProps, 
    leavesProps, easyInventoryProps, knowThisDocProps, 
    agentOneProps, everyNigerianProps
]