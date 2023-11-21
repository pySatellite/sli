/**
 * Common 모듈에는 공통적으로 사용되는 함수들이 정의되어 있습니다.
 */
export namespace Common {
    /**
     * 현재 환경이 개발 환경인지 실제 환경인지에 따라 다른 API URL을 반환합니다.
     * @returns {string} 개발 환경일 때는 VITE_API_LOCAL, 실제 환경일 때는 VITE_API_FLY
     */
    export function getApiUrl(): string {
        // eslint-disable-next-line no-undef
        if (process.env.NODE_ENV === 'development') {
            // 개발 환경일 때는 VITE_API_LOCAL을 반환
            return import.meta.env.VITE_API_LOCAL as string;
        } else {
            // 실제 환경일 때는 VITE_API_FLY를 반환
            return import.meta.env.VITE_API_FLY as string;
        }
    }

    /**
     * 현재 버전 정보와 환경을 결합하여 문자열로 반환합니다.
     * @returns {string} 버전 정보와 환경이 결합된 문자열
     */
    export function getVersion(): string {
        // 버전 정보를 가져옴
        let versionString = import.meta.env.VITE_SLI_VERSION; // 오타 수정

        // 버전 정보와 환경을 결합하여 반환
        return versionString.concat("-", process.env.NODE_ENV) as string;
    }
}
