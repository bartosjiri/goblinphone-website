export { default as ProfileCard } from './ProfileCard.svelte';
export { default as MatchPopup } from './MatchPopup.svelte';

export { profiles, loading, getProfiles, removeCurrentProfile } from './manageProfiles';
export { popupMatch, loadStoredMatches, addMatch, deleteMatch } from './manageMatches';

export type { Profile } from './Profile.types';
