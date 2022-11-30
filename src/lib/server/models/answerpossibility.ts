import { Model, DataTypes } from "sequelize";
import type { InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { db } from "../database";

import { Answer } from "./answer";
import { PairAnswer } from "./pairanswer";
/*
export const AnswerPossibility = db.define("AnswerPossibility", {
	id: ID,
	name: DataTypes.STRING,
	isTeacher: DataTypes.BOOLEAN,
});
 */

export class AnswerPossibility extends Model<
	InferAttributes<AnswerPossibility>,
	InferCreationAttributes<AnswerPossibility>
> {
	declare id: CreationOptional<number>;
	declare name: string;
	declare isTeacher: boolean;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

AnswerPossibility.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		isTeacher: DataTypes.BOOLEAN,
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize: db,
		tableName: "answerpossibilities",
	},
);

AnswerPossibility.hasMany(Answer, {
	sourceKey: "id",
	foreignKey: "answerpossibilityId",
	as: "AnswerAnswerPossibility",
});

AnswerPossibility.hasMany(PairAnswer, {
	sourceKey: "id",
	foreignKey: "answerOneId",
	as: "answerOne",
});
AnswerPossibility.hasMany(PairAnswer, {
	sourceKey: "id",
	foreignKey: "answerTwoId",
	as: "answerTwo",
});
