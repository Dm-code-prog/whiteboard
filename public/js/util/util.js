import { canvas } from "../global";
/**
 *
 * @param event
 * returns current (X, Y) position of the Mouse
 */
export const getMousePosition = (event) => {
    const rect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
    if (!rect) {
        console.log("can't get canvas rect");
        return {
            x: 0,
            y: 0,
        };
    }
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {
        x,
        y,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJ1dGlsL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUluQzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFpQixFQUFTLEVBQUU7SUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLHFCQUFxQixFQUFFLENBQUM7SUFDN0MsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0wsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7S0FDSDtJQUNELE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFbkMsT0FBTztRQUNMLENBQUM7UUFDRCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9