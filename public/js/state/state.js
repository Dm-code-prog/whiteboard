import { debug } from "../domains/debug";
export const State = new Proxy({
    isDrawing: false,
    isDeleting: false,
    isPressing: false,
}, {
    set(target, property, value) {
        target[property] = value;
        debug();
        return true;
    },
});
export const WhiteboardState = {
    path: [],
    paths: [],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsic3RhdGUvc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUXpDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FDNUI7SUFDRSxTQUFTLEVBQUUsS0FBSztJQUNoQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsS0FBSztDQUNsQixFQUNEO0lBQ0UsR0FBRyxDQUFDLE1BQWMsRUFBRSxRQUFzQixFQUFFLEtBQTJCO1FBQ3JFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUNGLENBQUM7QUFPRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQXFCO0lBQy9DLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDIn0=