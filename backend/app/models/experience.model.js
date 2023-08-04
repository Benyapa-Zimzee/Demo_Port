module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            title: String,
            describe: String
        },
        {
            timestamps:true
        }
    );

    const Experience = mongoose.model("experience", schema)
    return Experience
}