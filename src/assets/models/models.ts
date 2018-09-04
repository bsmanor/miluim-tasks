export interface Soldier {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    rank?: string;
    title?: string;
    joined?: string;
    avaiableMissions?: Mission[];
    currentMission?: string;
    isPresent?: string;
    battalionId?: string;
    squad?: string;
    platoon?: string;
    team?: string;
}

export interface Mission {
    id?: string;
    name?: string;
    duration?: string;
    restDuration?: string;
    isEmergencySquad?: boolean;
    emergencySquadDuration?: string;
    numOfSoldiers?: string;
    plusComnd?: boolean;
    plusOfficer?: boolean;
    additionalNotes?: string;
}
