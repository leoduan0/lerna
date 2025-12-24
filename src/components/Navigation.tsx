"use client"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ScrollShadow } from "@heroui/react"
import Ad from "@/components/Ad"
import useNavigationStatus from "@/hooks/useNavigationStatus"
import type TPage from "@/types/TPage"
import Pages from "./Pages"

interface NavigationProps {
  pages: TPage[]
}

function Navigation({ pages }: NavigationProps) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <>
      <nav
        className={`${navigationStatus ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 lg:opacity-100"} absolute z-20 flex h-full w-2/3 flex-col overflow-y-auto rounded-r-md border-r border-LAYOUT_BORDER-light bg-LAYOUT-light/50 backdrop-blur-lg transition dark:border-LAYOUT_BORDER-dark dark:bg-LAYOUT-dark/50 md:w-1/3 lg:static lg:w-96 lg:translate-x-0 lg:rounded-none lg:bg-LAYOUT-light lg:backdrop-blur-none lg:dark:bg-LAYOUT-dark`}
      >
        <div className="flex h-12 w-full items-center justify-center space-x-2 border-b border-LAYOUT_BORDER-light dark:border-LAYOUT_BORDER-dark">
          <svg
            className="dark:fill-white"
            viewBox="0 0 361.24445 112.88889"
            width={64}
          >
            <path d="m 78.538137,94.546623 h -63.02536 q -1.487951,0 -2.763338,-0.531411 -1.275387,-0.531411 -2.231927,-1.43481 Q 9.6141134,91.623862 9.0827023,90.348475 8.5512911,89.073089 8.5512911,87.585137 V 18.342267 H 22.367981 V 80.729934 H 78.538137 Z M 148.95012,56.125598 q 0,2.86962 -1.00968,6.217511 -1.00969,3.294749 -3.29475,6.164369 -2.23193,2.816479 -5.89867,4.729559 -3.61359,1.91308 -8.82142,1.91308 H 105.00242 V 62.024262 h 24.92318 q 2.81648,0 4.35757,-1.700516 1.54109,-1.753657 1.54109,-4.30443 0,-2.710197 -1.75366,-4.251289 -1.70051,-1.541092 -4.145,-1.541092 h -24.92318 q -2.81648,0 -4.35758,1.753656 -1.541088,1.700516 -1.541088,4.251289 v 19.290225 q 0,2.763338 1.700518,4.30443 1.75365,1.541092 4.30443,1.541092 h 24.8169 v 13.178996 h -24.92318 q -2.86962,0 -6.217515,-1.009681 -3.294749,-1.009681 -6.164369,-3.241608 -2.816479,-2.285068 -4.729559,-5.898663 -1.91308,-3.666737 -1.91308,-8.874566 V 56.125598 q 0,-2.86962 1.009681,-6.164369 1.009681,-3.34789 3.241608,-6.164369 2.285068,-2.86962 5.898664,-4.7827 3.666737,-1.91308 8.87457,-1.91308 h 24.92318 q 2.86962,0 6.16437,1.009681 3.34789,1.009681 6.16437,3.294749 2.86962,2.231927 4.7827,5.898663 1.91308,3.613596 1.91308,8.821425 z m 59.57118,-5.207829 h -31.08755 q -2.81648,0 -4.25129,1.43481 -1.43481,1.381669 -1.43481,4.091866 V 94.546623 H 157.93096 V 56.444445 q 0,-3.560455 0.9034,-6.376934 0.9034,-2.816479 2.39135,-4.942123 1.54109,-2.178786 3.50731,-3.666737 1.96622,-1.541092 4.09187,-2.497632 2.17878,-0.95654 4.35757,-1.381669 2.23193,-0.47827 4.14501,-0.47827 h 31.19383 z m 72.75019,43.628854 H 267.4548 V 62.661955 q 0,-2.710197 -0.95654,-4.835841 -0.9034,-2.178786 -2.49763,-3.719878 -1.59424,-1.541092 -3.77302,-2.338209 -2.12565,-0.850258 -4.62328,-0.850258 h -24.17921 v 43.628854 h -13.81669 v -50.59034 q 0,-1.43481 0.53142,-2.657055 0.53141,-1.275387 1.48795,-2.178786 0.95654,-0.95654 2.23192,-1.487951 1.27539,-0.531411 2.7102,-0.531411 h 31.14069 q 2.60392,0 5.47354,0.584552 2.92276,0.584552 5.73924,1.91308 2.86962,1.275387 5.42039,3.294749 2.60392,1.966221 4.57014,4.835841 2.01936,2.816479 3.18846,6.536357 1.16911,3.719878 1.16911,8.396296 z m 71.42166,-19.024518 q 0,2.86962 -1.00968,6.21751 -1.00968,3.294749 -3.29475,6.164369 -2.23192,2.816479 -5.89866,4.729559 -3.6136,1.91308 -8.82143,1.91308 h -24.92318 q -2.86962,0 -6.21751,-1.009681 -3.29475,-1.009681 -6.16437,-3.241608 -2.81648,-2.285068 -4.72956,-5.898663 -1.91308,-3.666737 -1.91308,-8.874566 0,-2.86962 1.00969,-6.217511 1.00968,-3.34789 3.2416,-6.164369 2.28507,-2.86962 5.89867,-4.7827 3.66673,-1.91308 8.87456,-1.91308 h 24.92318 v 13.178996 h -24.92318 q -2.81648,0 -4.35757,1.753657 -1.54109,1.700515 -1.54109,4.251289 0,2.710197 1.75366,4.251289 1.80679,1.487951 4.25128,1.487951 h 24.8169 q 2.81648,0 4.35758,-1.700516 1.54109,-1.700515 1.54109,-4.251289 V 56.125598 q 0,-2.710197 -1.70052,-4.30443 -1.64737,-1.594233 -4.19815,-1.594233 H 303.32506 V 37.10108 h 30.34357 q 2.86962,0 6.16437,1.009681 3.34789,1.009681 6.16437,3.294749 2.86962,2.231927 4.7827,5.898663 1.91308,3.613596 1.91308,8.821425 z" />
          </svg>
          <button
            onClick={() => toggleNavigation()}
            className="rounded-md p-2 transition hover:bg-BUTTON-light active:scale-95 dark:hover:bg-BUTTON-dark lg:hidden"
            type="button"
          >
            {" "}
            <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />{" "}
          </button>{" "}
        </div>
        <ScrollShadow className="h-full w-full">
          <Pages pages={pages} />
        </ScrollShadow>
        <Ad />
      </nav>
      <div
        onClick={() => toggleNavigation()}
        className={`${
          navigationStatus
            ? "z-10 translate-x-0 opacity-50 lg:hidden"
            : "translate-x-full opacity-0"
        } absolute left-2/3 right-0 h-full bg-black transition md:left-1/3`}
      />
    </>
  )
}

export default Navigation
